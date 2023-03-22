export const getInitials = (name) => {
    const words = name.split(" ");
    let initials = "";
    
    if (words.length > 0) {
      initials += words[0][0].toUpperCase();
    }
    
    if (words.length > 1) {
      initials += words[1][0].toUpperCase();
    }
    
    return initials;
  }
  