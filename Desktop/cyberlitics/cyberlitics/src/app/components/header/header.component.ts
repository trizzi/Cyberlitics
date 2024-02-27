import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  header = {
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae voluptatum necessitatibus recusandae nemo, officiis ad dignissimos, laborum exercitationem maiores repellat neque quam dolore, provident adipisci dolorem qui. Harum, possimus? Officiis, sint, iste fuga facilis quasi adipisci architecto at tempora soluta, mollitia cum maiores beatae deleniti error consequatur eum neque ipsa. Distinctio voluptas velit rem tenetur quisquam fugit, nulla tempora. Repellat quaerat illum natus repudiandae sed sit, reiciendis, iusto officia, possimus rem dignissimos mollitia corporis fugit earum? Est autem saepe aliquam iure, debitis possimus similique ipsum praesentium vitae maiores esse!",
    url: "#",
    buttonText: "START CREATING TODAY"
  }

}
