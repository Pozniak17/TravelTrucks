import { List } from "./Stars.styled";

export default function Stars(number) {
  switch (number) {
    case 1:
      return (
        <List>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
        </List>
      );

    case 2:
      return (
        <List>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
        </List>
      );

    case 3:
      return (
        <List>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
        </List>
      );
    case 4:
      return (
        <List>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/nostar.svg" />
          </li>
        </List>
      );

    case 5:
      return (
        <List>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
          <li>
            <img src="/icons/star.svg" />
          </li>
        </List>
      );
  }
}
