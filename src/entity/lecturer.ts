import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lecturer {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column({length:225})
    username: string = "placeholder"

    @Column({length:225})
    email: string = "email@gemail.com"

    @Column()
    years: number = 1
}