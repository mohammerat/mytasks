import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Task } from "../tasks/task.entity";
import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Team extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field(type => String)
    id: number;

    @Column({ unique: true })
    @Field()
    name: string;

    @OneToMany(type => Task, task => task.team)
    @Field(type => [Task])
    tasks: Task[];
}