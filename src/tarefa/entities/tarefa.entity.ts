import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
// import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: 'tb_tarefa'})
export class Tarefa {

    @PrimaryGeneratedColumn()   //id será gerado de forma automática
    @ApiProperty()
    id: number

    @IsNotEmpty()   //caso passe valor vazio, retorna badrequest, informando que está vazio.
    @MaxLength(50)  //máx 50 caracteres
    @Column({nullable: false, length: 50})  //não pode ser nulo e máx de caracter de 50
    @ApiProperty()
    nome: string

    @IsNotEmpty()   //caso passe valor vazio, retorna badrequest, informando que está vazio.
    @MaxLength(500)  //máx 500 caracteres
    @Column({nullable: false, length: 500}) //não pode ser nulo e máx de caracter de 50
    @ApiProperty()
    descricao: string

    @IsNotEmpty()   //caso passe valor vazio, retorna badrequest, informando que está vazio.
    @MaxLength(50)  //máx 50 caracteres
    @Column({nullable: false, length: 50})  //não pode ser nulo e máx de caracter de 50
    @ApiProperty()
    responsavel: string

    @Column()
    @ApiProperty()
    data: Date

    @Column()
    @ApiProperty()
    status: boolean

    @ManyToOne(() => Categoria, (categoria) => categoria.tarefas, {
        onDelete: "CASCADE"
    })
    @ApiProperty({type: () => Categoria})
    categoria: Categoria

}