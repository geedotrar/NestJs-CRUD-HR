import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CountriesService } from 'src/service/countries/countries.service';

@Controller('/countries')
export class CountriesController {
  constructor(private Services: CountriesService) {}

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
    @Body('countryId') countryId: string,
    @Body('countryName') countryName: string,
  ) {
    return await this.Services.Create(countryId, countryName);
  }

  @Put(':countryId')
  public async Update(
    @Param('countryId') countryId: string,
    @Body('countryName') countryName: string,
  ) {
    return await this.Services.Update(countryId, countryName);
  }

  @Delete(':countryId')
  public async Delete(@Param('countryId') countryId: string) {
    return await this.Services.Delete(countryId);
  }
}
