#!/usr/bin/env python3
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.money = 25
        
    @classmethod
    def hello(cls):
        print("hello")

Person.hello()