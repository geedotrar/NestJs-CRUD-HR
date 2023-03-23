import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countries } from 'output/entities/Countries';
import { Departments } from 'output/entities/Departments';
import { Employees } from 'output/entities/Employees';
import { JobHistory } from 'output/entities/JobHistory';
import { Jobs } from 'output/entities/Jobs';
import { Locations } from 'output/entities/Locations';
import { Regions } from 'output/entities/Regions';
import { User } from 'output/entities/User';
import { ControllerController } from 'src/controller/region/controller.controller';
import { CountriesController } from 'src/controller/countries/countries.controller';
import { DepartmentsController } from 'src/controller/departments/departments.controller';
import { EmployeesController } from 'src/controller/employees/employees.controller';
import { JobsController } from 'src/controller/jobs/jobs.controller';
import { LocationsController } from 'src/controller/locations/locations.controller';
import { CountriesService } from 'src/service/countries/countries.service';
import { DepartmentsService } from 'src/service/departments/departments.service';
import { EmployeesService } from 'src/service/employees/employees.service';
import { JobsService } from 'src/service/jobs/jobs.service';
import { LocationsService } from 'src/service/locations/locations.service';
import { ServiceService } from 'src/service/region/service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regions,
      Countries,
      Locations,
      Departments,
      Employees,
      JobHistory,
      Jobs,
      User,
    ]),
  ],

  providers: [
    ServiceService,
    CountriesService,
    JobsService,
    DepartmentsService,
    LocationsService,
    EmployeesService,
  ],
  controllers: [
    ControllerController,
    CountriesController,
    JobsController,
    DepartmentsController,
    LocationsController,
    EmployeesController,
  ],
})
export class ModuleModule {}
