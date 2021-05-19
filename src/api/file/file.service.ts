import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { File } from './file.entity';
import { GoogleDriveService } from './googleDriveService';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FileService {
  driveClientId: string; 
  driveClientSecret: string; 
  driveRedirectUri: string; 
  driveRefreshToken: string;
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
    private configService: ConfigService
  ) {
    this.driveClientId = this.configService.get<string>('GOOGLE_DRIVE_CLIENT_ID');
    this.driveClientSecret = this.configService.get<string>('GOOGLE_DRIVE_CLIENT_SECRET');
    this.driveRedirectUri = this.configService.get<string>('GOOGLE_DRIVE_REDIRECT_URI');
    this.driveRefreshToken = this.configService.get<string>('GOOGLE_DRIVE_REFRESH_TOKEN');
  }

  findAll(): Promise<File[]> {
    return this.filesRepository.find({ relations: ['user'] });
  }

  findOne(id: string): Promise<File> {
    return this.filesRepository.findOne(id);
  }

  save(file: File): Promise<File> {
    return this.filesRepository.save(file);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.filesRepository.delete(id);
  }

  update(id: string, file: File): Promise<UpdateResult> {
    return this.filesRepository.update(id, file);
  }

  async uploadInDrive(file){
    try {
      const googleDriveService = new GoogleDriveService(
        this.driveClientId,
        this.driveClientSecret,
        this.driveRedirectUri,
        this.driveRefreshToken,
      );
  
      file.forEach(async file => {
        await googleDriveService
        .saveFile(file.originalname, file.path, file.mimeType, file)
        .catch((error) => {
          console.error(error);
        }); 
      });

      this.save(file);

      fs.unlinkSync(file.path);
      
    } catch (error) {
      console.error(error);
    }
  }

}
