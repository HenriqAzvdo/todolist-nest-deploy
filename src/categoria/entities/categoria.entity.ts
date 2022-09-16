import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { type } from "os";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Tarefa } from "src/tarefa/entities/tarefa.entity";
import { Tarefa } from "../../tarefa/entities/tarefa.entity";


@Entity('tb_categoria')
export class Categoria {
    
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    @ApiProperty()
    descricao: string

    @OneToMany(() => Tarefa, (tarefa) => tarefa.categoria)
    @ApiProperty({type: () => Tarefa})
    tarefas: Tarefa[]

}