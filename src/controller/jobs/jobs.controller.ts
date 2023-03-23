import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobsService } from 'src/service/jobs/jobs.service';

@Controller('/jobs')
export class JobsController {
  constructor(private Services: JobsService) {}

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(
    @Body('jobId') jobId: string,
    @Body('jobTitle') jobTitle: string,
    @Body('minSalary') minSalary: string,
    @Body('maxSalary') maxSalary: string,
  ) {
    return await this.Services.Create(jobId, jobTitle, minSalary, maxSalary);
  }

  @Put(':jobId')
  public async Update(
    @Param('jobId') jobId: string,
    @Body('jobTitle') jobTitle: string,
    @Body('minSalary') minSalary: string,
    @Body('maxSalary') maxSalary: string,
  ) {
    return await this.Services.Update(jobId, jobTitle, minSalary, maxSalary);
  }

  @Delete(':jobId')
  public async Delete(@Param('jobId') jobId: string) {
    return await this.Services.Delete(jobId);
  }
}
