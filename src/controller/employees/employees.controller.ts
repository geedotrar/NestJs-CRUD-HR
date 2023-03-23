import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeesService } from 'src/service/employees/employees.service';

@Controller('/employees')
export class EmployeesController {
  constructor(private Services: EmployeesService) {}

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
    @Body('employeeId') employeeId: number,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('hireDate') hireDate: string,
    @Body('salary') salary: string,
    @Body('commissionPct') commissionPct: string,
    @Body('departmentId') departmentId: number,
  ) {
    return await this.Services.Create(
      employeeId,
      firstName,
      lastName,
      email,
      phoneNumber,
      hireDate,
      salary,
      commissionPct,
      departmentId,
    );
  }

  @Put(':employeeId')
  public async Update(
    @Param('employeeId') employeeId: number,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('hireDate') hireDate: string,
    @Body('salary') salary: string,
    @Body('commissionPct') commissionPct: string,
    @Body('departmentId') departmentId: number,
  ) {
    return await this.Services.Update(
      employeeId,
      firstName,
      lastName,
      email,
      phoneNumber,
      hireDate,
      salary,
      commissionPct,
      departmentId,
    );
  }

  @Delete(':employeeId')
  public async Delete(@Param('employeeId') employeeId: number) {
    return await this.Services.Delete(employeeId);
  }
}
