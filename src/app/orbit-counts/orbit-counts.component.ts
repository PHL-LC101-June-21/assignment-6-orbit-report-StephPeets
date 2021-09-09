import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
	selector: 'app-orbit-counts',
	templateUrl: './orbit-counts.component.html',
	styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	constructor() { }

	ngOnInit() {
	}

	typeArr(): string[] {
		let arr: string[] = [];
		if (this.satellites) {
			for (let i = 0; i < this.satellites.length; i++) {
				if (arr.indexOf(this.satellites[i].type) === -1) {
					arr.push(this.satellites[i].type);
				}
			}
		}
		console.log()
		return arr.sort();
	}

	satCount() {
		let arr = [];
		this.satellites.forEach(satellite => {
			arr.push(satellite.type);
		})
		return arr.sort();
	}

	keyVals() {
		let counts = {};

		this.satCount().forEach(item => {
			if (counts[item]) {
				counts[item] += 1;
				return;
			} else {
				counts[item] = 1;
			}
		});
		console.log(counts);
		return Object.values(counts);
	}

	totalSatellites(): number {
		return this.satellites.length;
	}

}

