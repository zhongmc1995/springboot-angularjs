package com.onion.bean;

/**
 * Created by zhongmc on 2017/4/27.
 * 学生实体类
 */
public class Person {
    /*学生姓名*/
    private String name;
    /*学生年龄*/
    private Integer age;
    /**
     * 学生地址
     */
    private String address;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Person(String name, Integer age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public Person() {
    }
}
