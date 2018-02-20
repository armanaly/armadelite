"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(_id, DNI, BECA, father, intolerencia, email2, phone2, notes, token, course_type, audition, duration, age, birthday, group, phone, email, city, country, studied_places, years_of_experience, residence, stage, registred) {
        this._id = _id;
        this.DNI = DNI;
        this.BECA = BECA;
        this.father = father;
        this.intolerencia = intolerencia;
        this.email2 = email2;
        this.phone2 = phone2;
        this.notes = notes;
        this.token = token;
        this.course_type = course_type;
        this.audition = audition;
        this.duration = duration;
        this.age = age;
        this.birthday = birthday;
        this.group = group;
        this.phone = phone;
        this.email = email;
        this.city = city;
        this.country = country;
        this.studied_places = studied_places;
        this.years_of_experience = years_of_experience;
        this.residence = residence;
        this.stage = stage;
        this.registred = registred;
    }
}
exports.Student = Student;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVJLFlBQ1csR0FBUSxFQUNSLEdBQVcsRUFDWCxJQUFZLEVBQ1osTUFBYyxFQUNkLFlBQW9CLEVBQ3BCLE1BQWMsRUFDZCxNQUFjLEVBQ2QsS0FBYSxFQUNiLEtBQWEsRUFDYixXQUFtQixFQUNuQixRQUFnQixFQUNoQixRQUFRLEVBQ1IsR0FBRyxFQUNILFFBQVEsRUFDUixLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxJQUFJLEVBQ0osT0FBTyxFQUNQLGNBQWMsRUFDZCxtQkFBbUIsRUFDbkIsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTO1FBdkJULFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDUixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQ1IsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUNILGFBQVEsR0FBUixRQUFRLENBQUE7UUFDUixVQUFLLEdBQUwsS0FBSyxDQUFBO1FBQ0wsVUFBSyxHQUFMLEtBQUssQ0FBQTtRQUNMLFVBQUssR0FBTCxLQUFLLENBQUE7UUFDTCxTQUFJLEdBQUosSUFBSSxDQUFBO1FBQ0osWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUNQLG1CQUFjLEdBQWQsY0FBYyxDQUFBO1FBQ2Qsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFBO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQUE7UUFDVCxVQUFLLEdBQUwsS0FBSyxDQUFBO1FBQ0wsY0FBUyxHQUFULFNBQVMsQ0FBQTtJQUNmLENBQUM7Q0FFVDtBQTdCRCwwQkE2QkMiLCJmaWxlIjoiY29tcG9uZW50cy9iYWxsZXQvc3R1ZGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdHVkZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgX2lkOiBhbnksXHJcbiAgICAgICAgcHVibGljIEROSTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBCRUNBOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGZhdGhlcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpbnRvbGVyZW5jaWE6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZW1haWwyOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHBob25lMjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBub3Rlczogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBjb3Vyc2VfdHlwZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBhdWRpdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBkdXJhdGlvbixcclxuICAgICAgICBwdWJsaWMgYWdlLFxyXG4gICAgICAgIHB1YmxpYyBiaXJ0aGRheSxcclxuICAgICAgICBwdWJsaWMgZ3JvdXAsXHJcbiAgICAgICAgcHVibGljIHBob25lLFxyXG4gICAgICAgIHB1YmxpYyBlbWFpbCxcclxuICAgICAgICBwdWJsaWMgY2l0eSxcclxuICAgICAgICBwdWJsaWMgY291bnRyeSxcclxuICAgICAgICBwdWJsaWMgc3R1ZGllZF9wbGFjZXMsXHJcbiAgICAgICAgcHVibGljIHllYXJzX29mX2V4cGVyaWVuY2UsXHJcbiAgICAgICAgcHVibGljIHJlc2lkZW5jZSxcclxuICAgICAgICBwdWJsaWMgc3RhZ2UsXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdHJlZFxyXG4gICAgKSB7ICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
