import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from 'output/entities/Employees';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employees) private serviceRepo: Repository<Employees>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.find({ where: { employeeId: id } });
  }

  public async Create(
    employeeId: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    hireDate: string,
    salary: string,
    commissionPct: string,
    departmentId: number,
  ) {
    try {
      const employees = await this.serviceRepo.save({
        employeeId: employeeId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        hireDate: hireDate,
        salary: salary,
        commissionPct: commissionPct,
        departmentId: departmentId,
      });
      return employees;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    employeeId: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    hireDate: string,
    salary: string,
    commissionPct: string,
    departmentId: number,
  ) {
    try {
      const employees = await this.serviceRepo.update(employeeId, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        hireDate: hireDate,
        salary: salary,
        commissionPct: commissionPct,
        departmentId: departmentId,
      });
      return employees;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(employeeId: number) {
    try {
      const locations = await this.serviceRepo.delete(employeeId);
      return locations;
    } catch (error) {
      return error.message;
    }
  }
}
