import type { Omrade } from '../types'
import { ask } from './ask'
import { gronlund } from './gronlund'
import { vestasen } from './vestasen'
import { fjellbakk } from './fjellbakk'
import { nygard } from './nygard'
import { hellen } from './hellen'
import { kankedal } from './kankedal'
import { sandum } from './sandum'
import { eltonasen } from './eltonasen'
import { sorum } from './sorum'
import { gronlundfjellet } from './gronlundfjellet'
import { klofta } from './klofta'
import { lindeberg } from './lindeberg'
import { frogner } from './frogner'
import { heksebergasen } from './heksebergasen'
import { skedsmokorset } from './skedsmokorset'

export const omrader: Omrade[] = [
  ask,
  gronlund,
  vestasen,
  fjellbakk,
  nygard,
  hellen,
  kankedal,
  sandum,
  eltonasen,
  sorum,
  gronlundfjellet,
  klofta,
  lindeberg,
  frogner,
  heksebergasen,
  skedsmokorset,
]

export function getOmrade(slug: string): Omrade | undefined {
  return omrader.find((o) => o.slug === slug)
}
