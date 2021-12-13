import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationComponent } from './user-registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../services/user.service';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let userService: UserService;
  let http: HttpClient;
  let httpController: HttpClientTestingModule;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponent ],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();
    userService = TestBed.inject(UserService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpClientTestingModule);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(userService).toBeDefined();
  });
});
