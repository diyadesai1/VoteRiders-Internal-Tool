interface ProfileProps {
  name: string;
  role?: string;
}

export function Profile({ name, role = "Volunteer" }: ProfileProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);

  return (
    <div className="profile">
      <span className="profile__avatar" aria-hidden>
        {initials || "V"}
      </span>
      <div className="profile__meta">
        <span className="profile__name">{name}</span>
        <span className="profile__role">{role}</span>
      </div>
    </div>
  );
}

