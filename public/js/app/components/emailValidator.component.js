"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.checkEmail = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }
        return null;
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZW1haWxWYWxpZGF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUlJO0lBQWUsQ0FBQztJQUVULHlCQUFVLEdBQWpCLFVBQWtCLE9BQW9CO1FBQ2xDLElBQUksWUFBWSxHQUFHLHdKQUF3SixDQUFDO1FBRTVLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUYsTUFBTSxDQUFDLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxzQkFBYyxpQkFnQjFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9lbWFpbFZhbGlkYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvciB7XHJcblxyXG4gICAgdmFsaWRhdG9yOiBGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrRW1haWwoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICBsZXQgRU1BSUxfUkVHRVhQID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9IFwiXCIgJiYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDw9IDUgfHwgIUVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGVtYWlsXCI6IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
