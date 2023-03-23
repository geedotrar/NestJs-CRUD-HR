import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/region/controller.controller';
import { ServiceService } from './service/region/service.service';
import { ModuleModule } from './module/module.module';
import { CountriesService } from './service/countries/countries.service';
import { CountriesController } from './controller/countries/countries.controller';
import { JobsService } from './service/jobs/jobs.service';
import { JobsController } from './controller/jobs/jobs.controller';
import { DepartmentsController } from './controller/departments/departments.controller';
import { DepartmentsService } from './service/departments/departments.service';
import { LocationsController } from './controller/locations/locations.controller';
import { LocationsService } from './service/locations/locations.service';
import { EmployeesService } from './service/employees/employees.service';
import { EmployeesController } from './controller/employees/employees.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'hr-db2',
      entities: ['dist/output/entities/*.js'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModuleModule,
  ],
})
export class AppModule {}
