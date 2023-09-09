import { Component } from '@angular/core';
import { LoaderService } from '@app/_services';
@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
 show: boolean | undefined;
  constructor(private _loaderService: LoaderService) {}

  ngOnInit() {
    this._loaderService.loadState.subscribe( res => {
      this.show = res;
    });
  }
}
