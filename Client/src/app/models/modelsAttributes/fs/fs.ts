import { PREC } from './prec';
import { FLEX } from './flex';
import { RELS } from './rels';
import { TEAM } from './team';
import { PMAT } from './pmat';

export interface FS {
    prec?: PREC;
    flex?: FLEX;
    rels?: RELS;
    team?: TEAM;
    pmat?: PMAT;
  }
