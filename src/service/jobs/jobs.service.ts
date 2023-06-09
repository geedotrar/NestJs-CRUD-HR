import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from 'output/entities/Jobs';
import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Jobs) private serviceRepo: Repository<Jobs>) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: string) {
    return await this.serviceRepo.find({ where: { jobId: id } });
  }

  public async Create(
    jobId: string,
    jobTitle: string,
    minSalary: string,
    maxSalary: string,
  ) {
    try {
      const jobs = await this.serviceRepo.save({
        jobId: jobId,
        jobTitle: jobTitle,
        minSalary: minSalary,
        maxSalary: maxSalary,
      });
      return jobs;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    jobId: string,
    jobTitle: string,
    minSalary: string,
    maxSalary: string,
  ) {
    try {
      const jobs = await this.serviceRepo.update(jobId, {
        jobTitle: jobTitle,
        minSalary: minSalary,
        maxSalary: maxSalary,
      });
      return jobs;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(jobId: string) {
    try {
      const jobs = await this.serviceRepo.delete(jobId);
      return jobs;
    } catch (error) {
      return error.message;
    }
  }
}
