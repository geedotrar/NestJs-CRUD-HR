import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departments } from "./Departments";
import { Jobs } from "./Jobs";

@Index("pk_employee_id", ["employeeId"], { unique: true })
@Entity("employees", { schema: "public" })
export class Employees {
  @PrimaryGeneratedColumn({ type: "integer", name: "employee_id" })
  employeeId: number;

  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 20,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 25,
  })
  lastName: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 25 })
  email: string | null;

  @Column("character varying", {
    name: "phone_number",
    nullable: true,
    length: 20,
  })
  phoneNumber: string | null;

  @Column("date", { name: "hire_date", nullable: true })
  hireDate: string | null;

  @Column("numeric", { name: "salary", nullable: true, precision: 8, scale: 2 })
  salary: string | null;

  @Column("numeric", {
    name: "commission_pct",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  commissionPct: string | null;

  @Column("integer", { name: "department_id", nullable: true })
  departmentId: number | null;

  @OneToMany(() => Departments, (departments) => departments.manager)
  departments: Departments[];

  @ManyToOne(() => Jobs, (jobs) => jobs.employees, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job: Jobs;

  @ManyToOne(() => Employees, (employees) => employees.employees, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager)
  employees: Employees[];
}
