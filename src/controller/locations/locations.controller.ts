import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LocationsService } from 'src/service/locations/locations.service';

@Controller('/locations')
export class LocationsController {
  constructor(private Services: LocationsService) {}

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
    @Body('locationId') locationId: number,
    @Body('streetAddress') streetAddress: string,
    @Body('postalCode') postalCode: string,
    @Body('city') city: string,
    @Body('stateProvince') stateProvince: string,
  ) {
    return await this.Services.Create(
      locationId,
      streetAddress,
      postalCode,
      city,
      stateProvince,
    );
  }

  @Put(':locationId')
  public async Update(
    @Param('locationId') locationId: number,
    @Body('streetAddress') streetAddress: string,
    @Body('postalCode') postalCode: string,
    @Body('city') city: string,
    @Body('stateProvince') stateProvince: string,
  ) {
    return await this.Services.Update(
      locationId,
      streetAddress,
      postalCode,
      city,
      stateProvince,
    );
  }

  @Delete(':locationId')
  public async Delete(@Param('locationId') locationId: number) {
    return await this.Services.Delete(locationId);
  }
}
