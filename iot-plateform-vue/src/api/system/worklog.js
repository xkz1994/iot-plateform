import request from '@/utils/request'

export function getJiraIssue(boardId, startTime, endTime) {
    return request({
        url: '/jira-server/jiraProvider/getJiraIssue',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            boardId: boardId,
            startTime: startTime,
            endTime: endTime
        }
    })
}

export function getAllBoards() {
    return request({
        url: '/jira-server/jiraProvider/getBoards',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
