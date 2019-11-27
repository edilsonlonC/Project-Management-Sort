import { RELY } from './rely';
import { DATA } from './data';
import { CPLX } from './cplx';
import { RUSE } from './ruse';
import { DOCU } from './docu';
import { TIME } from './time';
import { STOR } from './stor';
import { PVOL } from './pvol';
import { ACAP } from './acap';
import { PCAP } from './pcap';
import { PCON } from './pcon';
import { APEX } from './apex';
import { PLEX } from './plex';
import { LTEX } from './ltex';
import { TOOL } from './tool';
import { SITE } from './site';
import { SCED } from './sced';

export interface FCAP {
    rely?: RELY;
    data?: DATA;
    cplx?: CPLX;
    ruse?: RUSE;
    docu?: DOCU;
    time?: TIME;
    stor?: STOR;
    pvol?: PVOL;
    acap?: ACAP;
    pcap?: PCAP;
    pcon?: PCON;
    apex?: APEX;
    plex?: PLEX;
    ltex?: LTEX;
    tool?: TOOL;
    site?: SITE;
    sced?: SCED;
  }
