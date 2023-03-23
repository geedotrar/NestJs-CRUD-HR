import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentsService } from 'src/service/departments/departments.service';

@Controller('/departments')
export class DepartmentsController {
  constructor(private Services: DepartmentsService) {}

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(
    @Body('deparmentId') departmentId: number,
    @Body('departmentName') departmentName: string,
    @Body('managerId') managerId: number,
    @Body('locationId') locationId: number,
  ) {
    return await this.Services.Create(
      departmentId,
      departmentName,
      managerId,
      locationId,
    );
  }

  @Put(':jobId')
  public async Update(
    @Param('departmentId') departmentId: number,
    @Body('departmentName') departmentName: string,
  ) {
    return await this.Services.Update(departmentId, departmentName);
  }

  @Delete(':departmentId')
  public async Delete(@Param('departmentId') departmentId: string) {
    return await this.Services.Delete(departmentId);
  }
}
