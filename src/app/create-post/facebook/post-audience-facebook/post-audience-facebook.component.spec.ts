import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAudienceFacebookComponent } from './post-audience-facebook.component';

describe('PostAudienceFacebookComponent', () => {
  let component: PostAudienceFacebookComponent;
  let fixture: ComponentFixture<PostAudienceFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAudienceFacebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAudienceFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
