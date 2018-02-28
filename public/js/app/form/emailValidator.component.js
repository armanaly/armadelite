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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZW1haWxWYWxpZGF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFJSSxnQkFBZSxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBb0I7UUFDbEMsSUFBSSxZQUFZLEdBQUcsd0pBQXdKLENBQUM7UUFFNUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxRixNQUFNLENBQUMsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNwRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFoQkQsd0NBZ0JDIiwiZmlsZSI6ImZvcm0vZW1haWxWYWxpZGF0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvciB7XG5cbiAgICB2YWxpZGF0b3I6IEZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc3RhdGljIGNoZWNrRW1haWwoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgbGV0IEVNQUlMX1JFR0VYUCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9IFwiXCIgJiYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDw9IDUgfHwgIUVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpKSkge1xuXG4gICAgICAgICAgICByZXR1cm4geyBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgZW1haWxcIjogdHJ1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
