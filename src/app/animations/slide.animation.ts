import { AnimationEntryMetadata, animate, state, style, transition, trigger } from '@angular/core';

export const SlideAnimation: AnimationEntryMetadata =
  trigger('slideAnimation', [
    state('*',
      style({
        opacity: 1,
        // transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        // transform: 'translateX(100%)'
      }),
      animate('500ms ease-in')
    ]),
    transition(':leave', [
      animate('500ms ease-out', style({
        opacity: 0,
        // transform: 'translateX(-100%)'
      }))
    ])
  ]);
