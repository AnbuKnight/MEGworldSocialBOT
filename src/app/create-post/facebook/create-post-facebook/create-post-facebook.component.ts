import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { PostAudienceFacebookComponent } from '../post-audience-facebook/post-audience-facebook.component';

@Component({
  selector: 'create-post-facebook',
  templateUrl: './create-post-facebook.component.html',
  styleUrls: ['./create-post-facebook.component.css']
})
export class CreatePostFacebookComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  positionBelow = new FormControl(this.positionOptions[0]);
  positionAbove = new FormControl(this.positionOptions[1]);
  ngOnInit(): void {
  }
  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}
	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
	message: string = '';
	toggled: boolean = false;
handleSelection(event) {
  console.log(event.char);
  this.message += event.char;
}
chooseAudience()
{
	const dialogRef = this.dialog.open(PostAudienceFacebookComponent,{      
		maxWidth: '60vw'
	});
  
	  dialogRef.afterClosed().subscribe(result => {
		console.log(`Dialog result: ${result}`);
	  });
}
}
