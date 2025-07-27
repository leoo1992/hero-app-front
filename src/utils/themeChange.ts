  export const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isDark = e.target.checked;
    const newTheme = isDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    setTimeout(() => {
      if (drawerCheckbox) drawerCheckbox.checked = false;
    }, 400);
  };