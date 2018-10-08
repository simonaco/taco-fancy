import { Component, OnInit } from '@angular/core';
import { Taco } from '../taco.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TacosService } from '../tacos.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-taco-form',
  templateUrl: './taco-form.component.html',
  styleUrls: ['./taco-form.component.scss']
})
export class TacoFormComponent implements OnInit {
  taco: Taco;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tacosService: TacosService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.tacosService.getTaco(params.get('id'))
        )
      )
      .subscribe((data: Taco) => (this.taco = data));
  }

  cancel() {
    if (this.taco._id) {
      this.router.navigate(['/tacos', this.taco._id]);
    } else {
      this.router.navigate(['/tacos']);
    }
  }
  save() {
    if (this.taco._id) {
      this.tacosService.updateTaco(this.taco);
    } else {
      this.tacosService.addTaco(this.taco);
    }
  }
}
