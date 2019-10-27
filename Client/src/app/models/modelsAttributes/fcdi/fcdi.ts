import { PERS } from './pers';
import { RCPX } from './rcpx';
import { RUSE } from './ruse';
import { PDIF } from './pdif';
import { PREX } from './prex';
import { FCIL } from './fcil';
import { SCED } from './sced';

export interface FCDI {
    pers?: PERS;
    rcpx?: RCPX;
    ruse?: RUSE;
    pdif?: PDIF;
    prex?: PREX;
    fcil?: FCIL;
    sced?: SCED;
  }
