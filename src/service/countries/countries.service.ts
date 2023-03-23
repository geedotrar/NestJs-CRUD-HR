import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from 'output/entities/Countries';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Countries) private serviceRepo: Repository<Countries>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: string) {
    return await this.serviceRepo.find({ where: { countryId: id } });
  }

  public async Create(countryId: string, countryName: string) {
    try {
      const countries = await this.serviceRepo.save({
        countryId: countryId,
        countryName: countryName,
      });
      return countries;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(countryId: string, countryName: string) {
    try {
      const countries = await this.serviceRepo.update(countryId, {
        countryName: countryName,
      });
      return countries;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(countryId: string) {
    try {
      const countries = await this.serviceRepo.delete(countryId);
      return countries;
    } catch (error) {
      return error.message;
    }
  }
}
