import Mock from 'mockjs'
import list from '@/mock/list.json'
import bookList from '@/mock/data.json'

Mock.mock('/api/list',list)
Mock.mock('/api/bookList',bookList)