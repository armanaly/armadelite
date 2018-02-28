"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    constructor() { }
    static checkEmail(control) {
        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }
        return null;
    }
}
exports.EmailValidator = EmailValidator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZW1haWxWYWxpZGF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFJSSxnQkFBZSxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBb0I7UUFDbEMsSUFBSSxZQUFZLEdBQUcsd0pBQXdKLENBQUM7UUFFNUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxRixNQUFNLENBQUMsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNwRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFoQkQsd0NBZ0JDIiwiZmlsZSI6ImNvbXBvbmVudHMvZW1haWxWYWxpZGF0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0b3Ige1xyXG5cclxuICAgIHZhbGlkYXRvcjogRnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHN0YXRpYyBjaGVja0VtYWlsKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICAgICAgbGV0IEVNQUlMX1JFR0VYUCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPSBcIlwiICYmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8PSA1IHx8ICFFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbFwiOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
