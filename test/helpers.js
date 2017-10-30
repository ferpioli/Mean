import supertest from "supertest";
import chai from "chai";

global.request = supertest("localhost:3003")
global.expect = chai.expect;
