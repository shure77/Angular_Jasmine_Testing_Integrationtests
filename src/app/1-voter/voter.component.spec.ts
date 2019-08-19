import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  // create a dynamic testing module in beforeEach() - This is the basic setup for writing integration tests
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    // create an instance of the component
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement get the root DOM element of this component
    // fixture.debugElement is a wrapping element around the native Element
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges(); //has do be done to update the DOM and run Angulars change detection

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges(); //has do be done to update the DOM and run Angulars change detection

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when I click the vote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
