import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from 'output/entities/Departments';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments)
    private serviceRepo: Repository<Departments>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.find({ where: { departmentId: id } });
  }

  public async Create(
    departmentId: number,
    departmentName: string,
    managerId: number,
    locationId: number,
  ) {
    try {
      const departments = await this.serviceRepo.save({
        departmentId: departmentId,
        departmentName: departmentName,
        managerId: managerId,
        locationId: locationId,
      });
      return departments;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(departmentId: number, departmentName: string) {
    try {
      const departments = await this.serviceRepo.update(departmentId, {
        departmentName: departmentName,
      });
      return departments;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(departmentId: string) {
    try {
      const departments = await this.serviceRepo.delete(departmentId);
      return departments;
    } catch (error) {
      return error.message;
    }
  }
}
