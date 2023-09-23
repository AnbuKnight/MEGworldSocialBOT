import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostFacebookComponent } from './create-post-facebook.component';

describe('CreatePostFacebookComponent', () => {
  let component: CreatePostFacebookComponent;
  let fixture: ComponentFixture<CreatePostFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostFacebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
