"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidYouTubeUrlConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsValidYouTubeUrlConstraint = class IsValidYouTubeUrlConstraint {
    validate(value, args) {
        if (typeof value !== "string")
            return false;
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
        return regex.test(value.trim());
    }
    defaultMessage(args) {
        return "Video URL must be a valid YouTube video link (watch?v=, youtu.be/, or embed/)";
    }
};
exports.IsValidYouTubeUrlConstraint = IsValidYouTubeUrlConstraint;
exports.IsValidYouTubeUrlConstraint = IsValidYouTubeUrlConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "IsValidYouTubeUrl", async: false })
], IsValidYouTubeUrlConstraint);
//# sourceMappingURL=IsValidVideoUrlConstraint.js.map