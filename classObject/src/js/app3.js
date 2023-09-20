class User {
    constructor(ad, soyad, password) {
      this.ad = ad;
      this.soyad = soyad;
      this.password = password;
    }
  
    fullname() {
      return this.ad + " " + this.soyad;
    }
  
    static böyükYazdirHTML(user) {
      const fullname = user.fullname().toUpperCase();
      const html = `<p>${fullname}</p>`;
      document.body.innerHTML = html;
    }
  }
  
  // Obyekt yaratmaq
  const user1 = new User("Nəsibli", "Elşad", "secretpassword");
  
  // fullname dəyərini böyük formada HTML-a yazdırmaq
  User.böyükYazdirHTML(user1);
  