import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
					 DoCheck,
					 AfterContentChecked,
					 AfterContentInit,
					 AfterViewChecked,
					 OnDestroy {

	quantidade: number = 0;

  constructor() { }


	adicionar() {
		this.quantidade += 1;
	}

	decrementar() {
		this.quantidade -= 1;
	}

	// checked -> content -> view

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

  ngOnInit(): void {
		console.log("ngOnInit");
  }

	ngOnDestroy(): void {
		console.log('see you again');
	}

}
