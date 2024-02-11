import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  elements: string[] = [];

  loadingInProcess = false;

  ngOnInit(): void {
    this.elemekLekerdezese();
  }

  elemekLekerdezese() {
    this.loadingInProcess = true;
    fetch('https://kodbazis.hu/api/cimek')
      .then((res) => res.json())
      .then((tartalom) => {
        this.elements = tartalom;
      })
      .catch(() => {
        alert('Hiba');
      })
      .finally(() => {
        this.loadingInProcess = false;
      });
  }

  elementDelete(i: number) {
    this.loadingInProcess = true;
    fetch('https://kodbazis.hu/api/cimek/' + i, { method: 'DELETE' }).then(
      () => {
        this.elemekLekerdezese();
      }
    );
  }

  onSubmit(e: any) {
    e.preventDefault();
    const ujErtek = e.target.elements.title.value;
    this.loadingInProcess = true;
    fetch('https://kodbazis.hu/api/cimek', {
      method: 'POST',
      body: JSON.stringify({
        cim: ujErtek,
      }),
    }).then(() => {
      this.elemekLekerdezese();
    });

    e.target.reset();
  }
}
