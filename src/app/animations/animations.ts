import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';

export const routeAnimations =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          opacity: 0,
          left: 0,
          bottom: 0,
          padding: '30px'
        })
      ]),
      query(':enter', [
        style({ opacity: '0'})
      ]),
      query(':leave', animateChild(), { optional: true }),
      query(':enter', [
        animate('500ms ease-out', style({ opacity: '1'}))
      ])
    ])
  ]);