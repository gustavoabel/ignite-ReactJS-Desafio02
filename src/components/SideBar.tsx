import { GenreResponseProps } from '../App';

import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  handleClick: (id: number) => void;
  genres: GenreResponseProps[];
  selectedGenreId: number;
}

export function SideBar({
  handleClick,
  genres,
  selectedGenreId
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}