import { Injectable } from '@nestjs/common';
import { CourseTaken } from '../entity/course-taken.entity';
import { Mapper } from '../../CommonsModule/mapper/mapper';
import { CourseTakenDTO } from '../dto/course-taken.dto';

@Injectable()
export class CourseTakenMapper extends Mapper<CourseTaken, CourseTakenDTO> {
  constructor() {
    super(CourseTaken, CourseTakenDTO);
  }

  toDto(entityObject: Partial<CourseTaken>): CourseTakenDTO {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: CourseTaken[]): CourseTakenDTO[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: Partial<CourseTakenDTO>): CourseTaken {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: CourseTakenDTO[]): CourseTaken[] {
    return super.toEntityList(dtoArray);
  }
}
