import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locations } from 'output/entities/Locations';
import { Repository } from 'typeorm';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations) private serviceRepo: Repository<Locations>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.find({ where: { locationId: id } });
  }

  public async Create(
    locationId: number,
    streetAddress: string,
    postalCode: string,
    city: string,
    stateProvince: string,
  ) {
    try {
      const locations = await this.serviceRepo.save({
        locationId: locationId,
        streetAddress: streetAddress,
        postalCode: postalCode,
        city: city,
        stateProvince: stateProvince,
      });
      return locations;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    locationId: number,
    streetAddress: string,
    postalCode: string,
    city: string,
    stateProvince: string,
  ) {
    try {
      const locations = await this.serviceRepo.update(locationId, {
        streetAddress: streetAddress,
        postalCode: postalCode,
        city: city,
        stateProvince: stateProvince,
      });
      return locations;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(locationId: number) {
    try {
      const locations = await this.serviceRepo.delete(locationId);
      return locations;
    } catch (error) {
      return error.message;
    }
  }
}
