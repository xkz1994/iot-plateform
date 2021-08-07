import request from '@/utils/request'

export function getAlarmDetail(startTime, endTime) {
    return request({
        url: '/lenspacker/lenspackerDashboard/getAlarmDetail',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            startTime: startTime,
            endTime: endTime
        }
    })
}

export function getAlarmCount(startTime, endTime) {
    return request({
        url: '/lenspacker/lenspackerDashboard/getAlarmCount',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            startTime: startTime,
            endTime: endTime
        }

    })
}

export function getMachineCapacity(startTime, endTime) {
    return request({
        url: '/lenspacker/lenspackerDashboard/getMachineCapacity',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            startTime: startTime,
            endTime: endTime
        }
    })
}

export function getMachineStatus() {
    return request({
        url: '/lenspacker/lenspackerDashboard/getStatus',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function getMachineAlarms() {
    return request({
        url: '/lenspacker/lenspackerDashboard/getAlarmInfo',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}